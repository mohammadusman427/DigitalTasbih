import { tasbihSlice, addTasbih, deleteTasbih, startTasbih, incrementCount, stopTasbih } from '../src/Store/tasbihSlice';

describe('tasbihSlice', () => {
  const initialState = {
    tasbihs: [
      {
        id: 'subhanallah',
        name: 'Subhanallah',
        isPredefined: true,
        counts: 0,
        streak: 0,
        lastTimeAndDate: null,
        dailyCount: 0,
        lastDate: null,
      }
    ],
    currentTasbih: null,
    isCounting: false,
    currentCount: 0,
    lastAppOpenDate: null,
  };

  it('should handle initial state', () => {
    expect(tasbihSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      tasbihs: [
        {
          id: 'subhanallah',
          name: 'Subhanallah',
          isPredefined: true,
          counts: 0,
          streak: 0,
          lastTimeAndDate: null,
          dailyCount: 0,
          lastDate: null,
        },
        {
          id: 'alhamdulillah',
          name: 'Alhamdulillah',
          isPredefined: true,
          counts: 0,
          streak: 0,
          lastTimeAndDate: null,
          dailyCount: 0,
          lastDate: null,
        },
        {
          id: 'allah-hu-akbar',
          name: 'Allahu Akbar',
          isPredefined: true,
          counts: 0,
          streak: 0,
          lastTimeAndDate: null,
          dailyCount: 0,
          lastDate: null,
        },
        {
          id: 'la-ilaha-illallah',
          name: 'La ilaha illallah',
          isPredefined: true,
          counts: 0,
          streak: 0,
          lastTimeAndDate: null,
          dailyCount: 0,
          lastDate: null,
        },
        {
          id: 'astaghfirullah',
          name: 'Astaghfirullah',
          isPredefined: true,
          counts: 0,
          streak: 0,
          lastTimeAndDate: null,
          dailyCount: 0,
          lastDate: null,
        },
      ],
      currentTasbih: null,
      isCounting: false,
      currentCount: 0,
      lastAppOpenDate: null,
    });
  });

  it('should handle addTasbih', () => {
    const actual = tasbihSlice.reducer(initialState, addTasbih({ name: 'Test Tasbih' }));
    expect(actual.tasbihs).toHaveLength(2);
    expect(actual.tasbihs[1].name).toBe('Test Tasbih');
    expect(actual.tasbihs[1].isPredefined).toBe(false);
  });

  it('should handle startTasbih', () => {
    const tasbih = initialState.tasbihs[0];
    const actual = tasbihSlice.reducer(initialState, startTasbih(tasbih));
    expect(actual.currentTasbih).toEqual(tasbih);
    expect(actual.isCounting).toBe(true);
    expect(actual.currentCount).toBe(0);
  });

  it('should handle incrementCount', () => {
    const stateWithCounting = {
      ...initialState,
      currentTasbih: initialState.tasbihs[0],
      isCounting: true,
      currentCount: 5,
    };
    const actual = tasbihSlice.reducer(stateWithCounting, incrementCount());
    expect(actual.currentCount).toBe(6);
  });

  it('should handle stopTasbih', () => {
    const stateWithCounting = {
      ...initialState,
      currentTasbih: initialState.tasbihs[0],
      isCounting: true,
      currentCount: 10,
    };
    const actual = tasbihSlice.reducer(stateWithCounting, stopTasbih());
    expect(actual.currentTasbih).toBeNull();
    expect(actual.isCounting).toBe(false);
    expect(actual.currentCount).toBe(0);
    expect(actual.tasbihs[0].counts).toBe(10);
  });

  it('should not delete predefined tasbihs', () => {
    const actual = tasbihSlice.reducer(initialState, deleteTasbih('subhanallah'));
    expect(actual.tasbihs).toHaveLength(1); // Should not delete predefined tasbih
  });

  it('should delete custom tasbihs', () => {
    const stateWithCustomTasbih = {
      ...initialState,
      tasbihs: [
        ...initialState.tasbihs,
        {
          id: 'custom_1',
          name: 'Custom Tasbih',
          isPredefined: false,
          counts: 0,
          streak: 0,
          lastTimeAndDate: null,
          dailyCount: 0,
          lastDate: null,
        }
      ]
    };
    const actual = tasbihSlice.reducer(stateWithCustomTasbih, deleteTasbih('custom_1'));
    expect(actual.tasbihs).toHaveLength(1); // Should delete custom tasbih
  });
}); 