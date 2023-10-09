import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
const StudentsReviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="border p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={user1}
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">Robert Fox</h1>
            <p>Linkedin Leader</p>
          </div>
        </div>
        <p className="mt-3">
          SkillUp's online courses have transformed my learning experience. The
          diverse range of topics and engaging content make it easy to acquire
          new skills at my own pace
        </p>
      </div>
      <div className="border p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={user2}
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">John Dude</h1>
            <p>Facebook marketer</p>
          </div>
        </div>
        <p className="mt-3">
          I'm impressed with SkillUp's course quality. The instructors are
          knowledgeable, and the interactive lessons helped me gain practical
          skills that are valuable for my career.
        </p>
      </div>
      <div className="border p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={user3}
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">Wiliamson Hate</h1>
            <p>Instagram Leader</p>
          </div>
        </div>
        <p className="mt-3">
          SkillUp has been a game-changer for me. The flexibility of online
          learning, combined with their supportive community, has made acquiring
          new skills enjoyable and accessible.
        </p>
      </div>
    </div>
  );
};

export default StudentsReviews;
