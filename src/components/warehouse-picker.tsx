import React from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';

import { Scheduler } from '../handler';
import { useTranslator } from '../hooks';

export type WarehousePickerProps = {
  label: string;
  name: string;
  id: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  warehouseList: Scheduler.IWarehouse[];
  value: any;
};

export function WarehousePicker(
  props: WarehousePickerProps
): JSX.Element | null {
  const trans = useTranslator('jupyterlab');

  if (!props.warehouseList || props.warehouseList.length === 0) {
    return <em>{trans.__('Loading …')}</em>;
  }

  const labelId = `${props.id}-label`;

  return (
    <FormControl>
      <InputLabel id={labelId}>{props.label}</InputLabel>
      <Select
        labelId={labelId}
        label={props.label}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      >
        {props.warehouseList.map((wh) => (
          <MenuItem value={wh.id} key={wh.id}>
            {wh.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
