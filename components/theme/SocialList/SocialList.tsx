import cn from 'classnames';
import { SocialListProps } from './SocialList.type';

function SocialList({ items, className }: SocialListProps) {
  return (
    <ul className={cn('social-list', className)}>
      {items.map((item) => (
        <li key={item._id} className="social-list__item">
          <a href={item.path} className="social-list__link" target="_blank">
            <span className={cn(`icon-${item.name}`)}></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
