import toast from 'react-hot-toast';


 export  const notify = () => toast('Congratulations, you have added a contact!!!', {
    duration: 4000,
    position: 'top-center',
  
    
    style: {
        backgroundColor:"#742fb5",
        border: '1px solid #713200',
      padding: '16px',
      color: '#fff',
    },
  
    icon: '👏',
  
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

  export  const message = () => toast('You have deleted this contact!!!', {
    duration: 4000,
    position: 'top-center',
    style: {
        backgroundColor:"#eb3560",
        border: '1px solid #713200',
      padding: '16px',
      color: '#fff',
    },

    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });



  export  const loggedOut = () => toast('Attention, you are logged out!!!', {
    duration: 4000,
    position: 'top-center',
    style: {
        backgroundColor:"#eb3560",
        border: '1px solid #713200',
      padding: '16px',
      color: '#fff',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });











































