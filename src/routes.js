import React from 'react';
import { Text, Reply } from '@botonic/react';
import Welcome from './actions/welcome';
import chosen_complaint from './actions/chosen_complaint';
import chosen_customer_care from './actions/chosen_customer_care';
import chosen_feedback from './actions/chosen_feedback';

export const routes = [
    {
        path: 'welcome',
        text: /hi|hello|hey/,
        action: Welcome,
        childRoutes: [
            {
                path: 'chosen_complaint',
                payload: 'complaint',
                action: chosen_complaint,
            },
            {
                path: 'chosen_feedback',
                payload: 'feedback',
                action: chosen_feedback,
            },
            {
                path:'chosen_customer_care',
                payload: 'customer_care',
                action: chosen_customer_care,
            }
        ]
    }
]