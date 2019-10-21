export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
  image?: string;
  isActive?: boolean;
  balance?: number;
  registered?: any;
}

// the question mark makes them optional when utilizing the interface
