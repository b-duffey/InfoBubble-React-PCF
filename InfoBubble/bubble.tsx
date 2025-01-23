import * as React from 'react';
import { DefaultButton, IButtonProps } from '@fluentui/react/lib/Button';
import { TeachingBubble } from '@fluentui/react/lib/TeachingBubble';
import { useBoolean, useId } from '@fluentui/react-hooks';

interface SpeechBubbleProps {
    isCalloutVisible: boolean;
    toggleCallout: () => void;
}

const examplePrimaryButtonProps: IButtonProps = {
    children: 'Try it out',
};

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ isCalloutVisible, toggleCallout }) => {
    const buttonId = useId('targetButton');

    const exampleSecondaryButtonProps: IButtonProps = React.useMemo(
        () => ({
            children: 'Maybe later',
            onClick: toggleCallout,
        }),
        [toggleCallout],
    );

    return (
        <div>
            <DefaultButton
                id={buttonId}
                onClick={toggleCallout}
                text={isCalloutVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble'}
            />

            {isCalloutVisible && (
                <TeachingBubble
                    target={`#${buttonId}`}
                    hasCondensedHeadline={true}
                    primaryButtonProps={examplePrimaryButtonProps}
                    secondaryButtonProps={exampleSecondaryButtonProps}
                    onDismiss={toggleCallout}
                    headline="Discover what’s trending around you"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
                    harum non?
                </TeachingBubble>
            )}
        </div>
    );
};

export default SpeechBubble;