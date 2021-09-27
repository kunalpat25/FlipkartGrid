import React from 'react';
import { Text, Reply } from '@botonic/react';

export default class extends React.Component {
    render() {
        return (
            <>
            <Text>Welcome to Flipkart</Text>
            <Text>What brings you here?
                <Reply payload="complaint">Complaint</Reply> &nbsp;
                <Reply payload="customer_care">Talk to customer care</Reply> &nbsp;
                <Reply payload="feedback">Feedback</Reply>
            </Text>
            </>
        )
    }
}