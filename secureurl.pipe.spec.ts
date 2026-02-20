import { SecureurlPipe } from './secureurl.pipe';

describe('SecureurlPipe', () => {
  it('create an instance', () => {
    const pipe = new SecureurlPipe();
    expect(pipe).toBeTruthy();
  });
});
