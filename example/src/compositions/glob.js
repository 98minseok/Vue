export function useGlob(dir){

  const allFiles = import.meta.glob("@/components/**/*.vue", { eager: true });

  // 특정 폴더의 파일만 필터링
  const files = Object.fromEntries(
    Object.entries(allFiles).filter(([path]) => path.includes(`/${dir}/`))
  );

  return { files };
}
