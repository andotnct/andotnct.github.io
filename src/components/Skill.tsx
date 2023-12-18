const Skill = (props: {language:string,img:string}) => {
    return (
      <div className="mx-5">
        <img src={props.img} className="w-20 block m-auto border-4 border-white"></img>
        <div className="my-2">
          {props.language}
        </div>
      </div>
    );
};
export default Skill;