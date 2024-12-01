import { z } from 'zod';

export const SensorSchema = z.object({
  Id: z.string().nullish(),
  SensorId: z.string().nullish(),
  IMEI: z.string().min(1, 'IMEI is required'),
  ResultType: z.string().min(1, 'Result Type is required'),
  SensorName: z.string().min(1, 'Sensor Name must not be empty'),
  EventType: z.string().min(1, 'you must select Event Type'),
  EventCode: z.string().min(1, 'you must select Event Code'),
  IfSensor_0: z
    .string()
    .min(1, 'Sensor state_0 must not be empty')
    .nullish()
    .refine((val) => val?.toLocaleLowerCase() !== 'on', {
      message: 'Sensor state_0 must not be ON',
    }),
  IfSensor_1: z
    .string()
    .min(1, 'Sensor state_1 must not be empty')
    .nullish()
    .refine((val) => val?.toLocaleLowerCase() !== 'off', {
      message: 'Sensor state_1 must not be OFF',
    }),
  UnitsOfMeasurement: z.string().nullish(),
  FormulaOp: z.string().nullish(),
  Calibration: z.any().nullish(),
  IntervalsColors: z.any().nullish(),
  FormulaValue: z.coerce.number().nullish(),
  HighestValue: z.coerce.string().min(1, 'Highest Value must not be empty').nullish(),
  LowestValue: z.coerce.string().min(1, 'Lowest Value must not be empty').nullish(),
  FixedSensor: z.coerce.boolean().nullish(),
  Showintooltip: z.coerce.boolean().nullish(),
  ShowlastChangetime: z.coerce.boolean().nullish(),
});
