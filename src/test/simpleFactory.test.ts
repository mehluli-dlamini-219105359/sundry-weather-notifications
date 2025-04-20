import { UserFactory } from '../src/creational_patterns/simple_factory/UserFactory';
import { AdminUser } from '../src/creational_patterns/simple_factory/AdminUser';

test('creates an AdminUser instance', () => {
  const user = UserFactory.createUser('admin', '123', 'admin@example.com');
  expect(user).toBeInstanceOf(AdminUser);
  expect(user.role).toBe('admin');
});
