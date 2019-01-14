describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort([5, 1, 4, 3, 2]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});

describe('Swap', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('checks the number of swaps to sort', function () {
    bubbleSort([5, 1, 4, 3, 2]);
    expect(window.swap.calls.count()).toEqual(7);
  });
});