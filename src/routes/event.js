import express from 'express';
import Event from '../controllers/event';
import { verifyToken } from '../utils/jwt';

const eventRouter = express.Router();
eventRouter.post('/event', verifyToken, Event.createEvent);
eventRouter.get('/event/:id', Event.getEvent);
eventRouter.get('/event_category/:category', Event.getEventsByCategory);
eventRouter.get('/events', Event.getAllEvents);
eventRouter.patch('/event/:id', verifyToken, Event.editEvent);
eventRouter.delete('/event/:id', verifyToken, Event.deleteEvent);

export default eventRouter;
