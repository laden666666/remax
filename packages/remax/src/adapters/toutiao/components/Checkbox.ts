import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

export interface CheckboxProps extends BaseProps {
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
}

const Checkbox = createHostComponent<CheckboxProps>('checkbox');

export default Checkbox;
