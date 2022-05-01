export const viewport = ( options ) => {
    options = {
        once: true,
        ...options
    }
    
    return { 
        once: options.once,
        margin: '-200px'
    }
}

export const animAppearParent = ( options ) => {

    options = {
        direction: 'fromRight',
        ...options
    }
    
    return {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0,
                delay: .3,
                duration: .6
            },
        }
    }
} 

export const animAppearChild  = ( options ) => {

    options = {
        movement: true,
        direction: 'fromRight',
        opacity: false,
        distance: 200,
        ...options
    }

    let x;
    let y;

    switch (true) {
        case !options.movement:
            x = 0;
            y = 0;
            break;
        case options.direction == 'fromRight':
            x = options.distance;
            y = 0;
            break;
        case options.direction == 'fromLeft':
            x = -options.distance;
            y = 0;
            break; 
        case options.direction == 'fromTop':
            x = 0;
            y = -options.distance;
            break;
        case options.direction == 'fromBottom':
            x = 0;
            y = options.distance;
            break;  
        default:
            break;
    }
    
    return {
        hidden: {
            x,
            y,
            opacity: options.opacity ? 0 : 1,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: .6
            }
        }
    }
}