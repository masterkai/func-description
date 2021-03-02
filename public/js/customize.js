$(function () {
  const customizeState = {
    last:0,
    current:0
  }
  $('.previous').click(()=>{
    console.log(customizeState.current);
    if(customizeState.current===0){
      return
    }else {
      customizeState.current=customizeState.current -1
      $('.customizeItem').eq(customizeState.last).css({display:'none'})
      $('.customizeItem').eq(customizeState.current).css({display:'block'})
      customizeState.last=customizeState.current
    }

  })
  $('.next').click(()=>{
    console.log(customizeState.current);
    if(customizeState.current>=3){
      return
    }else {
      customizeState.current=customizeState.current + 1
      $('.customizeItem').eq(customizeState.last).css({display:'none'})
      $('.customizeItem').eq(customizeState.current).css({display:'block'})
      customizeState.last=customizeState.current
    }
  })

})