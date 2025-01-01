import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import type { PropsWithChildren } from 'react';

type IconProps = PropsWithChildren<{
    name: string
}>

export default function Icons({ name }: IconProps) {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={24} color='#F7CD2E' />
            break;
        case 'cross':
            return <Icon name="times" size={24} color='#38CC77' />
            break;
        default:
            return <Icon name="pencil" size={24} color='#393938FF' />
            break;
    }
}