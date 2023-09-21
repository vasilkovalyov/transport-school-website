import cn from 'classnames';
import { ContainerProps } from './Container.type';

function Container({ children, className }: ContainerProps) {
  return <div className={cn('container', className)}>{children}</div>;
}

export default Container;
