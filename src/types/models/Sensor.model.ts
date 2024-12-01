import { z } from "zod";
import { SensorSchema } from "../schema/SensorSchema";
export type Sensor = z.infer<typeof SensorSchema>;

export type SensorContent = {
  SensorId?: string;
  ResultType: string;
  IfSensor_0: string;
  IfSensor_1: string;
  UnitsOfMeasurement: string;
  FormulaOp: string;
  FormulaValue: number; // num
  LowestValue: number; // num
  HighestValue: number; // num
  Calibration: any[]; // Adjust the type according to your actual data structure
  IntervalsColors: any[]; // Adjust the type according to your actual data structure
};

export type SensorHeader = {
  SensorName: string;
  EventType: string; // Assuming eventTypesforSensor[0].eventType is a string
  EventCode: string;
  FixedSensor: boolean;
  Showintooltip: boolean;
  ShowlastChangetime: boolean;
  oldSensorName?: string;
};
export type IntervalsColors = {
  Color: string | any;
  to: number | any;
  from: number | any;
  width?: number;
};

export type UnitContent = {
  Id: string;
  upsertDate: string;
  UpdsertBy: string;
  IsActive: boolean;
  CurdOperation: number;
  IMEI: string;
  CustomerId: string;
  VehicleId: string;
  DeviceType: string;
  SIMCardNumber: string;
  SIMCardSerial: string;
  OdometerType: string;
  OdometerValue: string;
  OperationCode: any; // Update the type if information about OperationCode is available
  DevicePassword: string;
  DeviceSerial: string;
  EngineHoursType: string;
  EngineHoursValue: string;
  VehicleName: string;
  ManufacturerName: string;
  DeviceProtocol: string;
  DeviceModel: string;
  WaslId: any; // Update the type if information about WaslId is available
  Sensors: Sensor[];
};