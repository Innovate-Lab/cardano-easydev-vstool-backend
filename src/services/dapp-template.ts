import fs from 'fs';
import path from 'path';

interface FileNode {
    name: string;
    type: 'file' | 'directory';
    path: string;
    content?: string;
    children?: FileNode[];
}

class DappTemplateService {
    async readDirectoryStructure(dir: string, baseDir: string = dir): Promise<FileNode> {
        const items = await fs.promises.readdir(dir);
        const structure: FileNode = {
            name: path.basename(dir),
            type: 'directory',
            path: path.relative(baseDir, dir),
            children: []
        };

        for (const item of items) {
            if (item === '.DS_Store') continue;

            const fullPath = path.join(dir, item);
            const stat = await fs.promises.stat(fullPath);

            if (stat.isDirectory()) {
                const childStructure = await this.readDirectoryStructure(fullPath, baseDir);
                structure.children?.push(childStructure);
            } else {
                const content = await fs.promises.readFile(fullPath, 'utf-8');
                structure.children?.push({
                    name: item,
                    type: 'file',
                    path: path.relative(baseDir, fullPath),
                    content
                });
            }
        }

        return structure;
    }

    flattenStructure(node: FileNode, parentPath: string = ''): FileNode[] {
        const flatNodes: FileNode[] = [];
        const currentPath = parentPath ? `${parentPath}/${node.name}` : node.name;

        // Add current node
        flatNodes.push({
            name: node.name,
            type: node.type,
            path: currentPath,
            content: node.content
        });

        // Recursively process children
        if (node.children) {
            for (const child of node.children) {
                flatNodes.push(...this.flattenStructure(child, currentPath));
            }
        }

        return flatNodes;
    }

    async getFlattenedStructure(dir: string): Promise<FileNode[]> {
        const structure = await this.readDirectoryStructure(dir);
        return this.flattenStructure(structure);
    }
}

export const dappTemplateService = new DappTemplateService();