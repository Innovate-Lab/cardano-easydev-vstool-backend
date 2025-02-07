import cron from "node-cron";

interface CronJobService {
  run(): void;
  stop(): void;
}

class CronJobServiceImpl implements CronJobService {
  private scheduledJobs: cron.ScheduledTask[] = [];

  run() {
    // this.scheduledJobs.push();
  }

  stop() {
    this.scheduledJobs.forEach((job) => {
      job.stop();
    });
  }
}

const cronJobService = new CronJobServiceImpl();

export { cronJobService };
