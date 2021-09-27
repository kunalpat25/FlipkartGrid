import React from 'react';
import { Text, Reply } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
            <Text>You can contact our customer care executive</Text>
            <Reply payload="call">1800 202 9898</Reply>
            </>
        )
    }
}