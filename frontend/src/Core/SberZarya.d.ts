export namespace SberZarya {
    export interface RegularAchievements {
        id:number,
        title:string,
        description:string,
        img:string
    }
    
    export interface AchievementState {
        allState:boolean,
        userState:boolean,
        userAchievements:Array<number>,
        allAchievements: Array<RegularAchievements>
    }

    export interface AchievementSelectorState {
        achievements:AchievementState
    }
    
    export interface BrushingState {
        ongoingBrushing:boolean,
        time:number
    }

    export interface BrushingSelectorState {
        brushing:BrushingState
    }
}