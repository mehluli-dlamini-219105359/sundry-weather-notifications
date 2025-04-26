import { InMemoryUserRepository } from '../../../src/repositories/inmemory/InMemoryAnalyticsEventsRepository';;
import { User } from '../../../src/models/User';
//Unit Tests for working in memory repo
describe('InMemoryUserRepository', () => {
  let repository: InMemoryUserRepository;
  let user: User;

  beforeEach(() => {
    repository = new InMemoryUserRepository();
    user = new User('user-1', 'john@example.com', 'hashedPassword123', 'user');
  });

  it('should save and retrieve a user by ID', async () => {
    await repository.save(user);
    const result = await repository.findById('user-1');

    expect(result).not.toBeNull();
    expect(result?.getEmail()).toBe('john@example.com');
  });

  it('should find a user by email', async () => {
    await repository.save(user);
    const result = await repository.findByEmail('john@example.com');

    expect(result).not.toBeNull();
    expect(result?.userID()).toBe('user-1');
  });

    it('should return all users', async () => {
      const user1 = new User('user-2', 'jane@example.com', 'hashedPassword456', 'user');
      const user2 = new User('user-3', 'doe@example.com', 'hashedPassword789', 'user');
      await repository.save(user1);
      await repository.save(user2);
  
      const users = await repository.findAll();
  
      expect(users.length).toBe(2);
      expect(users.map(u => u.getEmail())).toEqual(['jane@example.com', 'doe@example.com']);
    });
  });