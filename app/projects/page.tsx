import { Card } from "@/components/Card";
import { Title } from "@/components/Title";

export default function Projects() {
    return <div>
        <Title title="Projects" />
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-4">

                <Card title="Differential equation" url="https://www.shadertoy.com/view/Dl3yRH" path="/projects/pde.gif" />
                <Card title="Torus billard trajectory" url="https://www.shadertoy.com/view/4XsfRN" path="/projects/torus.gif" />
                <Card title="Logical Perceptron" url="https://www.youtube.com/embed/922pNllF4aw?si=ReH2B6ksGJVqzn5O" />
                <Card title="Lissajous Curves" url="https://www.youtube.com/embed/3auIrZv5Wtc?si=F3PHYU-hQNI8eItC" />
                <Card title="Diagonal Argument" url="https://www.youtube.com/embed/7N3iKB0OnOs?si=VSfhZs_wePuE1tqL" />
                <Card title="Leap motion goalkeeper" path="/projects/goalkeeper.gif" />
            </div>
        </div>
    </div>

}
