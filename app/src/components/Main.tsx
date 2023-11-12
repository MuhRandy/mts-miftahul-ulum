type MainProps = {
  children: any;
};

function Main({ children }: MainProps) {
  return <main className="mb-10">{children}</main>;
}

export default Main;
