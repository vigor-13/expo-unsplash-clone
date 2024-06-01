export interface CurrentUserCollection {
  id: number;
  title: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  cover_photo: null;
  user: null;
}

export interface User {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: ProfileImage;
  links: UserLinks;
  for_hire: boolean;
  accepted_tos: boolean;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Location {
  name: string;
  city: string;
  country: string;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Photo {
  id: string;
  slug: string;
  alternative_slugs: {
    en?: string;
    es?: string;
    ja?: string;
    fr?: string;
    it?: string;
    ko?: string;
    de?: string;
    pt?: string;
  };
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  current_user_collections: CurrentUserCollection[];
  urls: PhotoUrls;
  links: PhotoLinks;
}

export interface PhotoDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string;
  exif: Exif;
  location: PhotoLocation;
  tags: Tag[];
  current_user_collections: CurrentUserCollection[];
  urls: PhotoUrls;
  links: PhotoLinks;
  user: User;
  views: number;
  breadcrumbs: Breadcrumb[];
}

export interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Tag {
  title: string;
  type: string;
  source: TagSource;
}

export interface TagSource {
  title: string;
  subtitle: string;
  meta_title: string;
  meta_description: string;
  description: string;
}

export interface Breadcrumb {
  index: number;
  slug: string;
  title: string;
  type: string;
}

export interface PhotoLocation {
  city: null | string;
  country: null | string;
  name: null | string;
  position: { latitude: number; longitude: number };
}

export interface Topic {
  cover_photo: Photo;
  current_user_contributions: [];
  description: string;
  starts_at: Date;
  ends_at: Date;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  id: string;
  links: {
    self: string;
    html: string;
    photos: string;
  };
  only_submissions_after: null;
  owners: User[];
  preview_photos: PreviewPhoto[];
  slug: string;
  status: string;
  title: string;
  total_current_user_submissions: null;
  total_photos: number;
  visibility: string;
}

export interface PreviewPhoto {
  asset_type: string;
  blur_hash: string;
  created_at: Date;
  id: string;
  slug: string;
  updated_at: Date;
  urls: PhotoUrls;
}

export interface TopicDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: any;
  only_submissions_after: any;
  visibility: string;
  featured: boolean;
  total_photos: number;
  links: {
    self: string;
    html: string;
    photos: string;
  };
  status: string;
  owners: User[];
  top_contributors: User[];
  cover_photo: CoverPhoto;
}

export interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: any;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: User;
  preview_photos: PreviewPhoto[];
}
