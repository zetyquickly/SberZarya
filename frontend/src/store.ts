import { configureStore } from '@reduxjs/toolkit';

import AchievementsSlice from "./Components/Pages/Achievements/AchievementsSlice";

export default configureStore({
    reducer: {
        achievements: AchievementsSlice
    }
});