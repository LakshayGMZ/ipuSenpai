export const runtime = 'edge';

export default function Page(
  {params}:{
    params:{
      id:string
    }
  }
) {
  console.log(params.id)
}
