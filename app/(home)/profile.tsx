import { Ionicons } from '@expo/vector-icons';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import '../global.css';

export default function HomeScreen() {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';



  return (
        <View className=' pt-12 bg-slate-100 h-screen-safe-or-0'>
          <View className=' bg-first h-44 -top-16 flex items-center justify-center'>
            <Image
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fuser-profile&psig=AOvVaw12tIHqDorTHUxgcv0odHFQ&ust=1749752620878000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD-89H-6Y0DFQAAAAAdAAAAABAEhttps://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250'
              // source="https://picsum.photos/seed/696/3000/2000"
              // placeholder={{ blurhash }}
              // contentFit="cover"
              // transition={1000}
              className='w-40 h-40 -bottom-24 rounded-full border-4 border-white z-10'
            />
          </View>
          <View className='flex items-center justify-center'>
            <Text className='text-2xl font-bold text-center mt-10'>Daniel Jerry</Text>
            <View>
              <Text className='text-center text-gray-500'>
                Joined: January 1, 2023
              </Text>                
            </View>

            <View className=' w-11/12  m-8 rounded-xl bg-white  px-4'>
              <View className='flex flex-row items-center border-b border-gray-200   justify-between py-3'>
                <Text className='text-center text-lg text-gray-500'>
                  Email ID:
                </Text>
                <Text className='text-center text-gray-800 text-lg font-semibold'>
                  danieljr@gmail.co.in
                </Text>
              </View>


              <View className='flex flex-row items-center border-b border-gray-200   justify-between py-3'>
                <Text className='text-center text-lg text-gray-500'>
                  Mobile No.:
                </Text>
                <Text className='text-center text-gray-800 text-lg font-semibold'>
                  +353 123 4567
                </Text>
              </View>



              <View className='flex flex-row items-center border-b border-gray-200   justify-between py-3'>
                <Text className='text-center text-lg text-gray-500'>
                  DOB:
                </Text>
                <Text className='text-center text-gray-800 text-lg font-semibold'>
                  01/01/1990
                </Text>
              </View>


              <View className='flex flex-row items-center    justify-between py-3'>
                <Text className='text-center text-lg text-gray-500'>
                  Employee ID:
                </Text>
                <Text className='text-center text-gray-800 text-lg font-semibold'>
                  EMP123456
                </Text>
              </View>

              
            </View>



            <View className=' w-11/12 flex-row justify-between items-center rounded-xl bg-white  px-2 py-1 mb-4 flex'>
              <View className='flex flex-row items-center justify-start'>
              <Ionicons name="notifications" size={24} className='' style={{ padding: 10 }} />
              <Text className='text-lg text-gray-800 font-semibold'>Notifications</Text>
              </View>
              <Switch 
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                value={true}
                onValueChange={() => {}}
              />
            </View>



            <View className=' w-11/12 flex-row justify-between items-center rounded-xl bg-white  px-2 py-1 mb-4 flex'>
              <View className='flex flex-row items-center justify-start'>
              <Ionicons name="settings" size={24} className='' style={{ padding: 10 }} />
              <Text className='text-lg text-gray-800 font-semibold'>Settings</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} className='' style={{ padding: 10 }} />
            </View>




            <TouchableOpacity className=' w-11/12 flex-row justify-between items-center rounded-xl bg-white  px-2 py-1 mb-4 flex'>
              <View className='flex flex-row items-center justify-start'>
              <Ionicons name="log-out" size={24} className='' style={{ padding: 10 }} />
              <Text className='text-lg text-gray-800 font-semibold'>Logout</Text>
              </View>

              <Ionicons name="chevron-forward" size={24} className='' style={{ padding: 10 }} />
            </TouchableOpacity>


            
          </View>
        </View>
  );
}
