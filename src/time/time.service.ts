import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
  getTime() {
    return Object.assign({
      start_time: '2022-09-19 02:39:00',
      now_time: new Date(),
      remain_time: '00:05:00',
    });
  }
}
