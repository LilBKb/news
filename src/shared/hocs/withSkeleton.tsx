import { DirectionType, SkeletonType } from "@/interfaces";
import Skeleton from "../UI/skeleton/Skeleton";
import React from "react";

// Выносим интерфейс в отдельный экспортируемый тип
export interface WithSkeletonProps {
    isLoading: boolean;
}

// Явно указываем возвращаемый тип
function withSkeleton<P extends object>(
    Component: React.ComponentType<P>,
    type?: SkeletonType,
    count?: number,
    direction?: DirectionType
): React.ComponentType<P & WithSkeletonProps> {
    
    const WithSkeleton: React.FC<P & WithSkeletonProps> = (props) => {
        const { isLoading, ...restProps } = props;
        
        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />;
        }
        
        return <Component {...restProps as P} />;
    };

    WithSkeleton.displayName = `withSkeleton(${Component.displayName || Component.name})`;
    
    return WithSkeleton;
}

export default withSkeleton;