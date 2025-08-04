import { SkeletonType, DirectionType } from '@/interfaces';
import './Skeleton.css';



interface Props{
    type?:SkeletonType;
    direction?:DirectionType;
    count?:number;
}

const Skeleton = ({ count = 1, type = 'banner',direction= 'column'}:Props) => {
    return (
        <>
            {count > 1 ? (
                <ul className={direction === 'column' ? 'column__list' : 'row__list'}>
                    {[...Array(count)].map((_, index) => (
                        <li key={index} className={type === 'banner' ? 'banner__skeleton' : 'item__skeleton'}>
                        </li>
                    ))}
                </ul>
            ) : (
                <li className={type === 'banner' ? 'banner__skeleton' : 'item__skeleton'}>
                </li>
            )}
        </>
    );
};

export default Skeleton;