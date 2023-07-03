import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Explore from '@/sections/Explore'
import GetStarted from '@/sections/GetStarted'
import Hero from '@/sections/Hero'
import WhatsNew from '@/sections/WhatsNew'
import World from '@/sections/World'

export default function HomePage() {
	return (
		<div className='bg-primary-black overflow-hidden'>
			<Navbar />
			<Hero />
			<div className='relative'>
				<About />
				<div className='gradient-03 z-0' />
				<Explore />
			</div>
			<div className='relative'>
				<GetStarted />
				<div className='gradient-04 z-0' />
				<WhatsNew />
			</div>
			<World />
		</div>
	)
}
