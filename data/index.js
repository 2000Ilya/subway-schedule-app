import * as schedule from "./schedule";
// console.log(schedule);
export default [
  {
    stationName: "Ботаническая",
    stationId: 9,
    weekDaySchedule: {
      scheduleToSouth: schedule.botanicheskayaWeekDayToSouth,
      sceduleToNorth: schedule.botanicheskayaWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.botanicheskayaWeekendToSouth,
      sceduleToNorth: schedule.botanicheskayaWeekendToNorth,
    },
  },
  {
    stationName: "Чкаловская",
    stationId: 8,
    weekDaySchedule: {
      scheduleToSouth: schedule.chkalovskayaWeekDayToSouth,
      sceduleToNorth: schedule.chkalovskayaWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.chkalovskayaWeekendToSouth,
      sceduleToNorth: schedule.chkalovskayaWeekendToNorth,
    },
  },
  {
    stationName: "Геологическая",
    stationId: 7,
    weekDaySchedule: {
      scheduleToSouth: schedule.geologicheskayaWeekDayToSouth,
      sceduleToNorth: schedule.geologicheskayaWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.geologicheskayaWeekendToSouth,
      sceduleToNorth: schedule.geologicheskayaWeekendToNorth,
    },
  },
  {
    stationName: "Площадь 1905 года",
    stationId: 6,
    weekDaySchedule: {
      scheduleToSouth: schedule.square1905WeekDayToSouth,
      sceduleToNorth: schedule.square1905WeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.square1905WeekendToSouth,
      sceduleToNorth: schedule.square1905WeekendToNorth,
    },
  },
  {
    stationName: "Динамо",
    stationId: 5,
    weekDaySchedule: {
      scheduleToSouth: schedule.dinamoWeekDayToSouth,
      sceduleToNorth: schedule.dinamoWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.dinamoWeekendToSouth,
      sceduleToNorth: schedule.dinamoWeekendToNorth,
    },
  },
  {
    stationName: "Уральская",
    stationId: 4,
    weekDaySchedule: {
      scheduleToSouth: schedule.uralskayaWeekDayToSouth,
      sceduleToNorth: schedule.uralskayaWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.uralskayaWeekendToSouth,
      sceduleToNorth: schedule.uralskayaWeekendToNorth,
    },
  },
  {
    stationName: "Машиностроителей",
    stationId: 3,
    weekDaySchedule: {
      scheduleToSouth: schedule.mashinostroiteleyWeekDayToSouth,
      sceduleToNorth: schedule.mashinostroiteleyWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.mashinostroiteleyWeekendToSouth,
      sceduleToNorth: schedule.mashinostroiteleyWeekendToNorth,
    },
  },
  {
    stationName: "Уралмаш",
    stationId: 2,
    weekDaySchedule: {
      scheduleToSouth: schedule.uralmashWeekDayToSouth,
      sceduleToNorth: schedule.uralmashWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.uralmashWeekendToSouth,
      sceduleToNorth: schedule.uralmashWeekendToNorth,
    },
  },
  {
    stationName: "Проспект космонавтов",
    stationId: 1,
    weekDaySchedule: {
      scheduleToSouth: schedule.kosmonavtovWeekDayToSouth,
      sceduleToNorth: schedule.kosmonavtovWeekDayToNorth,
    },
    weekendSchedule: {
      scheduleToSouth: schedule.kosmonavtovWeekendToSouth,
      sceduleToNorth: schedule.kosmonavtovWeekendToNorth,
    },
  },
];
