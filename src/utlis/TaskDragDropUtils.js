import { createDragDropContext } from '@/lib/drag-and-drop/ReusableDragDropProvider';

export const {
   Provider: TaskDragDropProvider,
   useProvider: useTaskDragDropProvider,
} = createDragDropContext();
