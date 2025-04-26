import { UserFactory } from '../creational_patterns/simple_factory/UserFactory';
import { AdminUser } from '../creational_patterns/simple_factory/models/AdminUser';

test('creates an AdminUser instance', () => {
  const user = UserFactory.createUser('admin', '123', 'admin@example.com');
  expect(user).toBeInstanceOf(AdminUser);
  expect(user.role).toBe('admin');
});
