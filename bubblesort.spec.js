describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort([3, 1, 2]) ).toEqual( [1, 2, 3] );
  });
});