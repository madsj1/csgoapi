import TeamRanking from '../models/TeamRanking';
import HLTVConfig from '../models/HLTVConfig';
declare const getTeamRanking: (config: HLTVConfig) => ({ year, month, day, country }?: {
    year?: string;
    month?: string;
    day?: string;
    country?: string;
}) => Promise<TeamRanking[]>;
export default getTeamRanking;
