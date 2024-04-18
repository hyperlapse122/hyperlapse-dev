/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/tRxAcuderph
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these fonts, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ComponentProps } from 'react'

export function MainPage() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-6 md:py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container grid items-start gap-6 md:gap-4 lg:grid-cols-[1fr_auto] lg:justify-between lg:items-center xl:gap-8 xl:max-w-5xl xl:grid-cols-2">
          <div className="flex flex-col gap-2 lg:order-last">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Hi, I&apos;m Sarah!
            </h1>
            <p className="text-base text-gray-500 md:text-xl dark:text-gray-400">
              Passionate about building robust applications with .NET. I believe
              in elegant code and beautiful user experiences.
            </p>
          </div>
          <div className="flex items-center text-center lg:text-left">
            <img
              alt="Sarah's photo"
              className="mx-auto aspect-[1] rounded-full overflow-hidden object-cover border-2 border-gray-100 sm:w-24 sm:h-24 lg:ml-auto"
              height="150"
              src="/placeholder.svg"
              width="150"
            />
          </div>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-4 lg:gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Expertise
              </h2>
              <p className="max-w-[750px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have years of experience working with .NET technologies,
                including C#, ASP.NET, and Blazor. I&apos;m proficient in
                building scalable and secure applications, and I&apos;m always
                eager to learn new technologies.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>C#</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      The primary language for .NET development. I&apos;m
                      comfortable with everything from language features to
                      building robust applications.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>ASP.NET</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      My go-to framework for building web applications.
                      I&apos;ve worked on both MVC and Web API projects, and
                      I&apos;m proficient in creating RESTful services and web
                      applications.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Blazor</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      I&apos;m excited about the possibilities of Blazor for
                      building interactive web UIs with C#. I&apos;ve
                      experimented with Blazor WebAssembly and server-side
                      Blazor, and I&apos;m eager to incorporate Blazor into my
                      future projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the projects I&apos;ve worked on. Click on each
              project to learn more.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Project 1</CardTitle>
                <CardDescription>
                  Description of the project goes here. This project involved
                  building a web application using ASP.NET Core and Angular.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="grid gap-2 text-sm">
                  <li>
                    <CheckCircleIcon className="w-4 h-4 mr-1.5 inline" />
                    Finished on: Jan 10, 2023
                  </li>
                  <li>
                    <UsersIcon className="w-4 h-4 mr-1.5 inline" />
                    Team size: 3
                  </li>
                  <li>
                    <CalendarIcon className="w-4 h-4 mr-1.5 inline" />
                    Duration: 6 months
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Project 2</CardTitle>
                <CardDescription>
                  Description of the project goes here. This project involved
                  building a web application using ASP.NET Core and Angular.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="grid gap-2 text-sm">
                  <li>
                    <CheckCircleIcon className="w-4 h-4 mr-1.5 inline" />
                    Finished on: Jan 10, 2023
                  </li>
                  <li>
                    <UsersIcon className="w-4 h-4 mr-1.5 inline" />
                    Team size: 3
                  </li>
                  <li>
                    <CalendarIcon className="w-4 h-4 mr-1.5 inline" />
                    Duration: 6 months
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Project 3</CardTitle>
                <CardDescription>
                  Description of the project goes here. This project involved
                  building a web application using ASP.NET Core and Angular.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="grid gap-2 text-sm">
                  <li>
                    <CheckCircleIcon className="w-4 h-4 mr-1.5 inline" />
                    Finished on: Jan 10, 2023
                  </li>
                  <li>
                    <UsersIcon className="w-4 h-4 mr-1.5 inline" />
                    Team size: 3
                  </li>
                  <li>
                    <CalendarIcon className="w-4 h-4 mr-1.5 inline" />
                    Duration: 6 months
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              If you&apos;d like to collaborate on a project or have any
              questions, feel free to send me a message using the form below.
            </p>
          </div>
          <div className="mx-auto w-full max-w-3xl space-y-4">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Sarah Johnson. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CalendarIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function CheckCircleIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function UsersIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
