const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="h-full flex items-center justify-center bg-[url('/auth-background.jpg')] w-full">
      {children}
    </div>
   );
}
 
export default AuthLayout;