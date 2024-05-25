import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

export const dateFromNow = (date: Date) => {
  return moment(date).fromNow();
};
