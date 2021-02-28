import { configureStore } from '@reduxjs/toolkit';

import AchievementsSlice from "./Components/Pages/Achievements/AchievementsSlice";
import BrushingSlice from "./Components/Pages/Brushing/BrushingSlice";

export default configureStore({
    reducer: {
        achievements: AchievementsSlice,
        brushing: BrushingSlice
    }
});