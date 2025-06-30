const CustomerReview = () => {
    return (
      <div className="pb-12 mt-12">
        <h1 className="font-bold text-2xl md:text-4xl text-center pb-8">Event Organizer Experiences</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card card-side bg-base-100 shadow-xl cursor-pointer">
            <div className="card-body">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://i.ibb.co/wz1Ttmv/young-handsome-man-beard-volunteering-260nw-1799591284.webp" />
                </div>
              </div>
              <h2 className="card-title">Clarissa Muir</h2>
              <p className="text-[10px]">MARCH 15, 2023</p>
              <p>
                Organizing our community art fair was an incredible experience. From coordinating vendors to managing attendees, I learned how powerful well-planned events can be. Watching the local talent shine and families enjoy their time made every effort worth it.
              </p>
            </div>
          </div>
  
          <div className="card card-side bg-base-100 shadow-xl cursor-pointer">
            <div className="card-body">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://i.ibb.co/71MnSnq/featured-individual-volunteer.jpg" />
                </div>
              </div>
              <h2 className="card-title">Aimee Bradshaw</h2>
              <p className="text-[10px]">APRIL 4, 2023</p>
              <p>
                Being part of the health awareness seminar team taught me the value of clear communication and teamwork. Coordinating speakers and managing logistics gave me confidence and made a real difference in our community’s health awareness.
              </p>
            </div>
          </div>
  
          <div className="card card-side bg-base-100 shadow-xl cursor-pointer">
            <div className="card-body">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://i.ibb.co/4KBGLTQ/4.png" />
                </div>
              </div>
              <h2 className="card-title">Lukasz Mitchell</h2>
              <p className="text-[10px]">JULY 7, 2023</p>
              <p>
                Hosting a charity concert for youth development was a milestone in my journey as an event organizer. The challenge of managing talent, tech, and promotion helped me grow professionally and brought the community together for a good cause.
              </p>
            </div>
          </div>
  
          <div className="card card-side bg-base-100 shadow-xl cursor-pointer">
            <div className="card-body">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://i.ibb.co/RCTyXkV/shutterstock-2346359623.webp" />
                </div>
              </div>
              <h2 className="card-title">Angliona</h2>
              <p className="text-[10px]">OCTOBER 20, 2023</p>
              <p>
                Coordinating the university tech symposium was both thrilling and demanding. Ensuring smooth sessions, managing registrations, and solving problems on the spot gave me a strong foundation in event leadership and decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomerReview;
  