export const test = 1;

/**
 * Sizes to use for spacing
 */
export enum Size {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    l = 'l',
    xl = 'xl',
}

/**
 * Utility class to store common styles
 */
export class StyleUtils {
    static Spacing: Record<Size | 'default', string> = {
        [Size.xs]: '.3em',
        [Size.sm]: '.5em',
        [Size.md]: '1em',
        [Size.l]: '1.5em',
        [Size.xl]: '2em',
        default: '1em',
    };

    static BorderRadius = {
        default: { borderRadius: '.5em' },
        fullyRounded: { borderRadius: '50em' },
    } as const;
}
