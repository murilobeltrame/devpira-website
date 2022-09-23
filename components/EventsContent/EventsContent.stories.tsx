import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventsContent from "./EventsContent";

export default {
    title: 'Sections/EventsContent',
    component: EventsContent
} as ComponentMeta<typeof EventsContent>

const Template: ComponentStory<typeof EventsContent> = (args) => <EventsContent {...args} />

const events = [{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    participateLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Meetup'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    participateLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
},{
    description: 'Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod.',
    detailsLink: 'https://www.google.com',
    title: 'Nome do evento',
    type: 'Live'
}]

export const Default = {
    args: {
        events
    }
}