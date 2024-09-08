import { ChevronRight } from 'lucide-react'
import '../components/css/App.css'
import { DefaultNavbar } from '../components/misc'

import {
  Card,
  CardContent,
  //CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Projects() {

  return (
    <>
      <title>Projects</title>
      < DefaultNavbar />

      <div className='flex flex-col justify-center items-center text-white mt-[3.25rem]'>
        <h1>Projects</h1>

        <Card className='card w-[22.5rem] md:w-[45rem] lg:w-[60rem]'>
          <CardHeader>
            <CardTitle className='text-2xl md:text-4xl tracking-wide'>
              Model Scheduler
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <img src='/ModelScheduler.png' className='flex rounded-lg'/>
            <p className='mt-4 indent-10 text-start'>
              The Model Scheduler is a tool created by students in the Computer Science II and Computer Science III classes each year at Allen High School.
              This tool helps students at Allen High School to create their schedule for the next school year by providing students with the course availability
              and information, letting them build their own schedules based off of the given data. This was the first project where I learned how to work with
              frameworks, specifically React, along with working together as a team.
            </p>
          </CardContent>

          <CardFooter> 
            <a className='projectLink' target='_blank' href='https://github.com/Allen-ISD-Computer-Science/REPO_ModelScheduler_2024'>View Github Repository</a>
          </CardFooter>
        </Card>

        <Card className='card w-[22.5rem] md:w-[45rem] lg:w-[60rem]'>
          <CardHeader>
            <CardTitle className='text-2xl md:text-4xl tracking-wide'>
              Terrarium Real Time Strategy (RTS)
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <img src='/RTSGame.png' className='flex rounded-lg'/>
            <p className='mt-4 indent-10 text-start'>
              Terrarium RTS is a very simplified version of average real time strategy games I created in the summer before my senior year. 
              It takes place on a fictional planet, and currently features a simple spawning system with a small assortment of units to choose from and a basic money system.
            </p>
          </CardContent>

          <CardFooter> 
            <a className='projectLink mx-4' href='/projects/terrarium'>View Article</a>
            <a className='projectLink mx-4' target='_blank' href='https://github.com/darrnguyen/TerrariumRTS'>View Github Repository</a>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}