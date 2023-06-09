export interface IUser {
  badge_counts: {
    bronze: number;
    silver: number;
    gold: number;
  };
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: string;
  user_id: number;
  accept_rate?: number;
  location?: string;
  website_url?: string;
  link: string;
  profile_image: string;
  display_name: string;
}

export interface IExtractedUser {
  profile_image: string;
  display_name: string;
  reputation: number;
  id: number;
  blocked: boolean;
  favourite: boolean;
}

export interface UserState {
  status: 'idle' | 'loading' | 'complete';
  theme: 'dark' | 'light';
  sidebarVisible: boolean;
  extractedUsers: IExtractedUser[];
  loading: boolean;
  error: boolean | null;
  errorMessage: string;
  filter: string;
  filterBlocked: boolean;
  filterFavourite: boolean;
}
