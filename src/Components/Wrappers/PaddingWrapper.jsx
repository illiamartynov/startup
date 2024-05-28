import React from 'react';

const PaddingWrapper = (props) => {
    const { pad, side, className } = props;

    const getPadding = (side) => {
        const sides = side.split(',').map(s => s.trim().toLowerCase());

        let padding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };

        if (sides.includes('all')) {
            padding = {
                top: pad,
                right: pad,
                bottom: pad,
                left: pad
            };
        } else {
            sides.forEach(s => {
                switch (s) {
                    case 'top':
                        padding.top = pad;
                        break;
                    case 'right':
                        padding.right = pad;
                        break;
                    case 'bottom':
                        padding.bottom = pad;
                        break;
                    case 'left':
                        padding.left = pad;
                        break;
                    default:
                        break;
                }
            });
        }
        if (window.matchMedia && window.matchMedia('(min-width: 1300px)').matches) {
            
            padding = {
                top: `calc(${pad} / 1200 * 100vmin)`,
                right: `calc(${pad} / 1200 * 100vmin)`,
                bottom: `calc(${pad} / 1200 * 100vmin)`,
                left: `calc(${pad} / 1200 * 100vmin)`
            };
        } else {
            padding = {
                top: `calc(${pad} / 400 * 100vmin)`,
                right: `calc(${pad} / 400 * 100vmin)`,
                bottom: `calc(${pad} / 400 * 100vmin)`,
                left: `calc(${pad} / 400 * 100vmin)`
            };
        }

        return padding;
    };

    const calculatedPadding = getPadding(side);

    return (
        <div className={className} style={{ paddingTop: calculatedPadding.top, paddingRight: calculatedPadding.right, paddingBottom: calculatedPadding.bottom, paddingLeft: calculatedPadding.left }}>
            {props.children}
        </div>
    );
};

export default PaddingWrapper;
