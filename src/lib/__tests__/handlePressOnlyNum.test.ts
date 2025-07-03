import { handlePressOnlyNum } from '../handlePressOnlyNum';

describe('handlePressOnlyNum', () => {
  it('allows backspace key', () => {
    const mockEvent = {
      key: 'Backspace',
      preventDefault: jest.fn(),
    };

    handlePressOnlyNum(mockEvent);
    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  });

  it('allows numeric keys', () => {
    const mockEvent = {
      key: '5',
      preventDefault: jest.fn(),
    };

    handlePressOnlyNum(mockEvent);
    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  });

  it('prevents non-numeric keys', () => {
    const mockEvent = {
      key: 'a',
      preventDefault: jest.fn(),
    };

    handlePressOnlyNum(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('prevents special characters', () => {
    const mockEvent = {
      key: '@',
      preventDefault: jest.fn(),
    };

    handlePressOnlyNum(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});